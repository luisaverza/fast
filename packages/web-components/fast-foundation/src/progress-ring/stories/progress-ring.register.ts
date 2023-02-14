import { css } from "@microsoft/fast-element";
import { FASTProgressRing } from "../progress-ring.js";
import {
    progressRingIndicatorTemplate,
    progressRingTemplate,
} from "../progress-ring.template.js";

const styles = css`
    :host {
        align-items: center;
        display: flex;
        outline: none;
        height: calc(var(--height-number) * 1px);
        width: calc(var(--height-number) * 1px);
        margin: calc(var(--height-number) * 1px) 0;
    }

    .progress {
        height: 100%;
        width: 100%;
    }

    .background {
        stroke: var(--neutral-fill-rest);
        fill: none;
        stroke-width: 2px;
    }

    .determinate .indicator {
        --progress-segments: 44;
        stroke: var(--accent-foreground-rest);
        fill: none;
        stroke-dasharray: calc(
                ((var(--progress-segments) * var(--percent-complete)) / 100) * 1px
            )
            calc(var(--progress-segments) * 1px);
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
    }

    .indeterminate .indicator {
        stroke: var(--accent-foreground-rest);
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
        animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
        0% {
            stroke-dasharray: 0.01px 43.97px;
            transform: rotate(0deg);
        }
        50% {
            stroke-dasharray: 21.99px 21.99px;
            transform: rotate(450deg);
        }
        100% {
            stroke-dasharray: 0.01px 43.97px;
            transform: rotate(1080deg);
        }
    }
`;

FASTProgressRing.define({
    name: "fast-progress-ring",
    template: progressRingTemplate({
        determinateIndicator: progressRingIndicatorTemplate,
        indeterminateIndicator: progressRingIndicatorTemplate,
    }),
    styles,
});
