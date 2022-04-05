<script>
  import { nanoid } from 'nanoid';
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

  export let scale = 1;
  // Accessibility
  export let title = '';
  export let desc = '';

  let titleId = title ? nanoid(4) : '';
  let descId = desc ? nanoid(4) : '';
</script>

<style>
  .is-spinning {
  }

  .icon-disabled {
  }
</style>

<div aria-hidden="true" class={klass} class:is-spinning={spin} class:icon-disabled={disabled} style="font-size:{size};">
  {#if path}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {viewBox}
      style="fill: {fillColor || 'currentColor'};
          stroke: {stroke || 'currentColor'};
          scale: {scale};"
      aria-labelledby="{titleId} {descId}"
      role = "img"
      preserveAspectRatio="xMidYMid meet"
    >
      {#if title}
        <title id="{titleId}">{title}</title>
      {/if}
      {#if desc}
        <desc id="{descId}">{desc}</desc>
      {/if}
      <path d={path} />
    </svg>
  {/if}
  <slot />
</div>
