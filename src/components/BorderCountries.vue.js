import { defineProps } from "vue";
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    borders: {
        type: Array,
        default: () => [],
    },
    allCountries: {
        type: Array,
        required: true,
    },
});
const getCountryName = (code) => {
    const country = props.allCountries.find((c) => c.alpha3Code === code);
    return country ? country.name : code;
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        borders: {
            type: Array,
            default: () => [],
        },
        allCountries: {
            type: Array,
            required: true,
        },
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.borders && __VLS_ctx.borders.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border-countries") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        for (const [border] of __VLS_getVForSourceType((__VLS_ctx.borders))) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((border)), to: (({ name: 'DetailPage', params: { alpha3Code: border } })), ...{ class: ("border-link") }, }));
            const __VLS_2 = __VLS_1({ key: ((border)), to: (({ name: 'DetailPage', params: { alpha3Code: border } })), ...{ class: ("border-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            (__VLS_ctx.getCountryName(border));
            __VLS_nonNullable(__VLS_5.slots).default;
            var __VLS_5;
        }
    }
    __VLS_styleScopedClasses['border-countries'];
    __VLS_styleScopedClasses['border-link'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
            getCountryName: getCountryName,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
