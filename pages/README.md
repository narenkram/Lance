# Quick steps to customize
1. Download the [source code](https://github.com/narenkram/PersonalWebsiteTemplate/releases) or click [here](https://github.com/narenkram/PersonalWebsiteTemplate/generate) to create new repository from this template
1. Prepare your logo, icons, image you want use in the site
2. Copy the assets to respective folders
3. Replace the images, icons, in the code


### Intro Section
You can find the photo frame [here](./assets/../../assets/images/) Use the frame with your photo

### Services Section
Write your own.

### About Section
Write your own.

### Contact Section
To create your custom form with no server code. Sign up [Formspree](https://formspree.io/)

```
<form action="https://formspree.io/f/{form_id}" method="post">
  <label for="email">Your Email</label>
  <input name="Email" id="email" type="email">
  <button type="submit">Submit</button>
</form>
```