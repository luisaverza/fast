import { css } from "@microsoft/fast-element";
import chevronRightIcon from "../../../statics/svg/chevron_right_12_regular.svg";
import { FASTTreeItem } from "../tree-item.js";
import { treeItemTemplate } from "../tree-item.template.js";

const styles = css`
    :host([hidden]) {
        display: none;
    }

    :host {
        display: block;
        contain: content;
        position: relative;
        outline: none;
        cursor: pointer;
        font-family: var(--body-font);
        --expand-collapse-button-size: calc(
            (var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px
        );
    }

    :host(:focus) .control {
        outline: none;
    }

    :host(:focus-visible) .control {
        border: var(--focus-stroke-outer) calc(var(--stroke-width) * 1px) solid;
        color: var(--neutral-foreground-rest);
    }

    .control {
        display: flex;
        position: relative;
        align-items: center;
        white-space: nowrap;
        box-sizing: border-box;
        color: var(--neutral-foreground-rest);
        background: var(--neutral-fill-stealth-rest);
        border-radius: calc(var(--control-corner-radius) * 1px);
        border: transparent calc(var(--stroke-width) * 1px) solid;
        height: calc(
            ((var(--base-height-multiplier) + var(--density)) * var(--design-unit) + 1) *
                1px
        );
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        font-weight: 400;
    }

    .control:hover {
        background: var(--neutral-fill-stealth-hover);
    }

    .control:active {
        background: var(--neutral-fill-stealth-active);
    }

    .control {
        padding-inline-start: 10px;
    }

    :host([nested]) .control {
        padding-inline-start: calc(
            10px + var(--expand-collapse-button-size) + var(--tree-item-nested-width, 0px)
        );
    }

    .items {
        display: none;
        --tree-item-nested-width-slotted: calc(16px + var(--tree-item-nested-width, 0px));
    }

    ::slotted(fast-tree-item) {
        --tree-item-nested-width: var(--tree-item-nested-width-slotted, 0px);
    }

    .expand-collapse-button {
        background: none;
        border: none;
        outline: none;
        width: calc(
            (
                    ((var(--base-height-multiplier) / 2) * var(--design-unit)) +
                        ((var(--design-unit) * var(--density)) / 2) +
                        (var(--design-unit) * 2)
                ) * 1px
        );
        height: calc(
            (
                    ((var(--base-height-multiplier) / 2) * var(--design-unit)) +
                        ((var(--design-unit) * var(--density)) / 2) +
                        (var(--design-unit) * 2)
                ) * 1px
        );
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-inline-end: 6px;
        position: absolute;
        transform: translateX(calc(-100% - 6px));
    }

    slot[name="expand-collapse-icon"] *,
    ::slotted([slot="expand-collapse-icon"]) {
        transition: transform 0.1s linear;
        transform-origin: center;
        transform: rotate(0deg);
        pointer-events: none;
        fill: currentcolor;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }

    :host([aria-expanded="true"]) > .items {
        display: block;
    }

    :host([disabled]) .control {
        opacity: var(--disabled-opacity);
        cursor: not-allowed;
    }

    :host([nested]) .expand-collapse-button:hover {
        background: var(--tree-item-expand-collapse-hover);
    }

    :host([selected]) .control {
        background: var(--neutral-fill-rest);
    }

    :host([selected]) .expand-collapse-button:hover {
        background: var(--tree-item-expand-collapse-selected-hover);
    }

    :host([selected])::after {
        background: var(--accent-foreground-rest);
        border-radius: calc(var(--control-corner-radius) * 1px);
        content: "";
        display: block;
        position: absolute;
        top: calc(((var(--base-height-multiplier)) * var(--design-unit) / 4) * 1px);
        width: 3px;
        height: calc(((var(--base-height-multiplier)) * var(--design-unit) / 2) * 1px);
    }

    :host([selected])::after {
        left: calc(var(--focus-stroke-width) * 1px);
    }

    :host([expanded]) slot[name="expand-collapse-icon"] *,
    :host([expanded]) ::slotted([slot="expand-collapse-icon"]) {
        transform: rotate(45deg);
    }
`;

FASTTreeItem.define({
    name: "fast-tree-item",
    styles,
    template: treeItemTemplate({
        expandCollapseIcon: chevronRightIcon,
    }),
});
