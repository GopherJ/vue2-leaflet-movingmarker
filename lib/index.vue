<script>
  import {
    optionsMerger,
    propsBinder,
    findRealParent,
    debounce,
    LayerMixin,
    OptionsMixin
  } from 'vue2-leaflet'
  import { marker, DomEvent, Icon, latLng } from 'leaflet'
  import 'leaflet.marker.slideto'

  /**
   * Marker component, lets you add and personalize markers on the map
   */
  export default {
    name: 'LMovingMarker',
    mixins: [LayerMixin, OptionsMixin],
    props: {
      pane: {
        type: String,
        default: 'markerPane',
      },
      draggable: {
        type: Boolean,
        custom: true,
        default: false,
      },
      latLng: {
        type: [Object, Array],
        custom: true,
        default: null,
      },
      icon: {
        type: [Object],
        custom: false,
        default: () => new Icon.Default(),
      },
      zIndexOffset: {
        type: Number,
        custom: false,
        default: null,
      },
      duration: {
        type: Number,
        required: true
      },
      keepAtCenter: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        ready: false,
      }
    },
    mounted() {
      const options = optionsMerger(
        {
          ...this.layerOptions,
          icon: this.icon,
          zIndexOffset: this.zIndexOffset,
          draggable: this.draggable,
        },
        this
      )
      this.mapObject = marker(this.latLng, options)
      DomEvent.on(this.mapObject, this.$listeners)
      this.mapObject.on('move', debounce(this.latLngSync, 100))
      propsBinder(this, this.mapObject, this.$options.props)
      this.parentContainer = findRealParent(this.$parent)
      this.parentContainer.addLayer(this, !this.visible)
      this.ready = true
      this.$nextTick(() => {
        /**
         * Triggers when the component is ready
         * @type {object}
         * @property {object} mapObject - reference to leaflet map object
         */
        this.$emit('ready', this.mapObject)
      })
    },
    methods: {
      setDraggable(newVal) {
        if (this.mapObject.dragging) {
          newVal
            ? this.mapObject.dragging.enable()
            : this.mapObject.dragging.disable()
        }
      },
      setLatLng(newVal) {
        if (newVal == null) {
          return
        }

        if (this.mapObject) {
          const oldLatLng = this.mapObject.getLatLng()
          const newLatLng = latLng(newVal)
          if (
            newLatLng.lat !== oldLatLng.lat ||
            newLatLng.lng !== oldLatLng.lng
          ) {
            this.mapObject.slideTo(newLatLng, {
              duration: this.duration,
              keepAtCenter: this.keepAtCenter
            })
          }
        }
      },
      latLngSync(event) {
        this.$emit('update:latLng', event.latlng)
        this.$emit('update:lat-lng', event.latlng)
      },
    },
    render: function(h) {
      if (this.ready && this.$slots.default) {
        return h('div', { style: { display: 'none' } }, this.$slots.default)
      }
      return null
    },
  }
</script>

<docs>
## Demo
::: demo
<template>
  <l-map style="height: 350px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng" ></l-marker>
  </l-map>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482]
    };
  }
}
</script>
:::
</docs>
