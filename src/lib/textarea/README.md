
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#textarea-element)

# ➤ textarea-element

Multiline text fields.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#properties)

## ➤ Properties

| Property       | Attribute      | Description                                      | Type           | Default    |
|----------------|----------------|--------------------------------------------------|----------------|------------|
| `autocomplete` | `autocomplete` | Whether autocomplete is on or off.               | `"on" | "off"` | `required` |
| `cols`         | `cols`         | Amount of columns.                               | `number`       | `required` |
| `disabled`     | `disabled`     | Disables the element.                            | `boolean`      | false      |
| `filled`       | `filled`       | Fills the input with a solid color.              | `boolean`      | false      |
| `maxLength`    | `maxLength`    | Max value length.                                | `number`       | `required` |
| `minLength`    | `minLength`    | Min value length.                                | `number`       | `required` |
| `name`         | `name`         | Name of the native form element.                 | `string`       | `required` |
| `outlined`     | `outlined`     | Makes the input outlined.                        | `boolean`      | false      |
| `pattern`      | `pattern`      | Value pattern.                                   | `string`       | `required` |
| `placeholder`  | `placeholder`  | Placeholder text.                                | `string`       | `required` |
| `readonly`     | `readonly`     | Makes the element readonly (disabled but tabbable) | `boolean`      | false      |
| `required`     | `required`     | Makes the element required in a form context.    | `boolean`      | false      |
| `role`         | `role`         | Role of the input.                               | `AriaRole`     | "textbox"  |
| `rows`         | `rows`         | Amount of rows.                                  | `number`       | `required` |
| `type`         | `type`         | Type of the input.                               | `InputType`    | "text"     |
| `value`        | `value`        | Value of the form element.                       | `string`       |            |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#slots)

## ➤ Slots

| Slot   | Description               |
|--------|---------------------------|
| after  | Content after the input.  |
| before | Content before the input. |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#events)

## ➤ Events

| Event  | Description                                      |
|--------|--------------------------------------------------|
| submit | Dispatched when the enter key is hit while holding down ctrl or the meta-key. |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#css-custom-properties)

## ➤ CSS Custom Properties

| Property                            | Description                                   |
|-------------------------------------|-----------------------------------------------|
| --input-before-after-color          | Color of the before and after slots.          |
| --input-bg                          | Default background.                           |
| --input-bg-filled                   | Background when filled.                       |
| --input-bg-filled-hover             | Background on :hover.                         |
| --input-border-radius-filled        | Border radius when filled.                    |
| --input-border-radius-outlined      | Border radius when outlined.                  |
| --input-border-width                | Width of the border.                          |
| --input-color                       | Default color.                                |
| --input-color-disabled              | Color when disabled.                          |
| --input-font-family                 | Font family.                                  |
| --input-font-size                   | Font size.                                    |
| --input-padding-left-right          | Padding for the left and right.               |
| --input-padding-left-right-outlined | Padding for the left and right when outlined. |
| --input-padding-top-bottom          | Padding for the top and bottom.               |
| --input-placeholder-color           | Color of the placeholder.                     |
| --input-placeholder-color-disabled  | Color of the placeholder when disabled.       |
| --input-placeholder-font-size       | Font size of the placeholder.                 |
| --input-placeholder-space           | Space between placeholder and input content.  |
| --input-placeholder-transition      | Transition of the placeholder.                |
| --input-state-color-active          | State color when active.                      |
| --input-state-color-disabled        | State color when disabled.                    |
| --input-state-color-hover           | State color on :hover.                        |
| --input-state-color-inactive        | State color when inactive.                    |
| --input-state-color-invalid         | State color when invalid.                     |
| --input-transition                  | Transition.                                   |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#usage)

## ➤ Usage

Go [here](https://weightless.dev/elements/textarea) to try the demo.

<a href="https://weightless.dev/elements/textarea" align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/elements/master/screenshots/textarea-element.png?token=AF-iBZJNydxFHIc4sQBFRLt8o2_qR34hks5chErwwA%3D%3D" width="700" />
</a>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	
|[<img alt="Andreas Mehlsen" src="https://avatars1.githubusercontent.com/u/6267397?s=460&v=4" width="100">](https://twitter.com/andreasmehlsen) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/weightless/blob/master/CONTRIBUTING.md)|
|:---: | :---:|
|[Andreas Mehlsen](https://twitter.com/andreasmehlsen) | [You?](https://github.com/andreasbm/weightless/blob/master/CONTRIBUTING.md)|

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).