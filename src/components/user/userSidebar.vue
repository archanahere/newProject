<template>
    <sidebar-menu :menu="menu" />
    <sidebar-menu @update:collapsed="onToggleCollapse" @item-click="onItemClick" />
  </template>
  
  <script>
  import "custom-var.scss";
import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";

export default {
    
    methods: {
      onToggleCollapse(collapsed) {},
      onItemClick(event, item) {}
    },
    props: {
        // Sidebar menu (required)
        menu: {
    type: Array,
    required: true
  },

  // Sidebar Collapse state (v-model:collapsed to enable two-way data binding)
  collapsed: {
      type: Boolean,
      default: false
    },
    
    // Sidebar width (expanded)
    width: {
    type: String,
    default: '290px'
  },

  // Sidebar width (collapsed)
  widthCollapsed: {
    type: String,
    default: '65px'
  },

  // Keep only one child opened at a time (first level only)
  showOneChild: {
    type: Boolean,
    default: false
  },

  // Keep all child open
  showChild: {
    type: Boolean,
    default: false
  },

  // Sidebar right to left
  rtl: {
    type: Boolean,
    default: false
  },

  // Make sidebar relative to the parent (by default the sidebar is relative to the viewport)
  relative: {
    type: Boolean,
    default: false
  },

  // Hide toggle collapse btn
  hideToggle: {
    type: Boolean,
    default: false
  },

  // Sidebar theme (available themes: 'white-theme')
  theme: {
    type: String,
    default: ''
  },

  // Disable hover on collapse mode
  disableHover: {
    type: Boolean,
    default: false
  },

  // The name of the custom link component (must be registered globally and define item as a prop)
  linkComponentName: {
    type: String,
    default: undefined
  }
},
      data() {
        return {
          menu: [
            {
              header: 'Main Navigation',
              hiddenOnCollapse: true
            },
            {
              href: '/',
              title: 'Dashboard',
              icon: 'fa fa-user'
            },
            {
              href: '/charts',
              title: 'Charts',
              icon: 'fa fa-chart-area',
              child: [
                {
                  href: '/charts/sublink',
                  title: 'Sub Link'
                }
              ]
            }
          ]
        }
      }
    }
  </script>
