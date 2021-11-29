<script>
  /**
   * Classes icon wrapper.
   */
  let klass = '';
  export { klass as class };
  /**
   * Size of the icon.
   */
  export let size = '1em';
  /**
   * ViewBox if `path` value is present.
   */
  export let viewBox = '0 0 24 24';
  /**
   * If `true`, the icon will be spinning.
   */
  export let spin = false;
  /**
   * If `true`, the icon will be disabled.
   */
  export let disabled = false;
  /**
   * An svg path.
   */
  export let path = null;

  export let fillColor;

  export let stroke;
</script>

<style>
  .is-spinning {

  }

  .icon-disabled {

  }

</style>

<i
  aria-hidden="true"
  class="{klass}"
  class:is-spinning={spin}
  class:icon-disabled={disabled}
  style="font-size:{size};">
  {#if path}
    <svg xmlns="http://www.w3.org/2000/svg"
         width={size} height={size}
         {viewBox}
        style="fill: {fillColor || 'currentColor'};
          stroke: {stroke || 'currentColor'};"
    >
      <path d={path} />
    </svg>
  {/if}
  <slot />
</i>
