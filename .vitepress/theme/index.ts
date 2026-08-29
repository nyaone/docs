import DefaultTheme from "vitepress/theme";
import './custom.css';
import LayoutWithTopbar from './LayoutWithTopbar.vue'

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: LayoutWithTopbar
}
