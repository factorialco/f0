const React = require("react")
const { View } = require("react-native")

const BlurView = React.forwardRef(function BlurView(props, ref) {
  return React.createElement(View, { ref, ...props })
})

BlurView.displayName = "BlurView"

module.exports = { BlurView }
