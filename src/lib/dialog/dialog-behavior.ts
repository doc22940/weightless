import { IOverlayBehaviorBaseProperties, OverlayBehavior, OverlayBehaviorEvent } from "../overlay/overlay-behavior";
import { CUBIC_BEZIER } from "../util/constant/animation";

export interface IDialogBehaviorProperties extends IOverlayBehaviorBaseProperties {
}

/**
 * Button behavior.
 */
export abstract class DialogBehavior<R, C extends Partial<IDialogBehaviorProperties>> extends OverlayBehavior<R, C> implements IDialogBehaviorProperties {

	protected abstract $dialog: HTMLElement;
	protected abstract $backdrop: HTMLElement;

	protected animateIn () {
		const animationConfig: KeyframeAnimationOptions = {
			...this.animationConfig,
			fill: "both"
		};

		let ready = false;
		const setup = () => {
			if (ready) return;
			ready = true;
			this.dispatchOverlayEvent(OverlayBehaviorEvent.SHOW);
		};

		const dialogAnimation = this.$dialog.animate(<Keyframe[]>[
			{transform: `scale(0.9) translate(0, 30px)`, opacity: `${0}`},
			{transform: `scale(1) translate(0, 0)`, opacity: `${1}`}
		], animationConfig);

		const backdropAnimation = this.$backdrop.animate(<Keyframe[]>[
			{opacity: `${0}`},
			{opacity: `${1}`}
		], animationConfig);

		dialogAnimation.onfinish = setup;
		backdropAnimation.onfinish = setup;

		this.currentInAnimations.push(dialogAnimation, backdropAnimation);
	}

	protected animateOut (result?: R) {
		const animationConfig: KeyframeAnimationOptions = {
			duration: this.duration,
			easing: CUBIC_BEZIER,
			fill: "both"
		};

		// Cleans up the component and animation
		let cleaned = false;
		const cleanup = () => {
			if (cleaned) return;
			cleaned = true;

			this.dispatchOverlayEvent(OverlayBehaviorEvent.HIDE, result);
			this.resolve(result);
		};

		const dialogAnimation = this.$dialog.animate(<Keyframe[]>[
			{transform: `translateY(0)`, opacity: `${1}`},
			{transform: `translateY(30px)`, opacity: `${0}`}
		], animationConfig);

		const backdropAnimation = this.$backdrop.animate(<Keyframe[]>[
			{opacity: `${1}`},
			{opacity: `${0}`}
		], animationConfig);

		dialogAnimation.onfinish = cleanup;
		backdropAnimation.onfinish = cleanup;

		this.currentOutAnimations.push(dialogAnimation, backdropAnimation);
	}
}