<!-- header section -->
<p align="center">
  <img src="https://i.imgur.com/t2aQUL1.png" height="224" /><br/>
  <span><b>LazyLoadInImages.</b></span><br/>
  <span>Mobile Application Developed in <b>React Native.</b></span><br/>
  <span>Running on both mobile platforms, <b>Android 🤖</b> & <b>iOS 🍎</b>. </span><br/>
</p>
<!-- header section END -->

<br/>
<!-- show case/gif section -->
<p align="center">
    <img alt="React Native App - Android.gif" height="620" src="https://media.giphy.com/media/k5AgnekTGN5X0mumuB/giphy.gif" />
    <img alt="React Native App - iOS.gif" height="620" src="https://media.giphy.com/media/dCB3kXnfn4skKyxZ8A/giphy.gif" />
</p>
<!-- show case/gif section END -->

<br/>

<!-- about app and course section -->

## About this app

On this app was developed the <b>Lazy Load</b> on Images.<br/>
Lazy Load It would be a form of image upload feedback for the end user, in which the app will "sample" the image content with blur before even displaying it in full size.<br/>
The effects of Lazy Load in images is mainly perceived with slow connections, as in 3G for example, so maybe if you are in a good connection, do not notice so much difference, but for someone with slow connection, it makes all the difference.
When we deal with mobile applications, we are automatically exposed to completely different environments for each user.<br/>
Where we can see enough of it <b>Lazy Load</b> on Images, it would be on [Instagram](https://imgur.com/XlWb7c2):

<br/>

## Tech Stack

- [React Native](https://github.com/facebook/react-native)

## Used libraries

- [React Native Image Progress](https://github.com/oblador/react-native-image-progress)
- [React Native Progress](https://github.com/oblador/react-native-progress)

<br/>

> Note: Unfortunately, <b>progress in spinner only works on iOS 🍎</b>.<br/> 
Until then the developer of Lib [React Native Progress](https://github.com/oblador/react-native-progress) has not yet pronounced on this problem in Android 🤖.<br/> 
An [Issue](https://github.com/oblador/react-native-progress/issues/101) has been opened about this, now all that remains is the resolution of this [Issue](https://github.com/oblador/react-native-progress/issues/101).

<br/>

### Running it locally

- `git clone https://github.com/samuelmataraso/ShimmerPlaceholder.git`
- `yarn`
- `cd ios/ && pod install`
- `cd .. && react-native link`
- `react-native run-ios` or `react-native run-android`

Before `react-native run-android`, dont forget do this:

- On android root folder, create this file `local.properties`
- Inside this file, add this line with your sdk patch `sdk.dir = /Users/user/your/Android/sdk/patch`
  <!-- about app and course section END -->

<br/>

> Note: On iOS 🍎, if you have anyproblem like this: [iOS Issue - ARTShape](https://user-images.githubusercontent.com/14864292/32197667-e5e6b7ae-bda3-11e7-8bbd-4e7f6ebeb35b.png), <br/> please follow this steps to fix this problem: [FIX iOS Issue - ARTShape](https://docs.google.com/document/d/1bhoxYt_lRdWX01Vh8P6oicLMCASqvgEDvYcFIE5hDUc/edit?usp=sharing)

<br/>

<!-- about me -->

## About me @Dev

Follow me on Twitter: [@samuelmataraso](https://twitter.com/samuelmataraso)

<a href="https://twitter.com/samuelmataraso" target="_blank">
<img src="https://twitter.com/samuelmataraso/profile_image?size=original" height="100" /></a>

<!-- about me  END -->
