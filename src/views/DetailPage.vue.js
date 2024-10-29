import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Header from "../components/Header.vue";
import BorderCountries from "../components/BorderCountries.vue";
import BackButton from "../components/BackButton.vue"; // Use JavaScript comment style
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const country = ref(null);
const allCountries = ref([]);
const theme = ref("light");
const fetchCountryDetails = async (alpha3Code) => {
    try {
        const countryResponse = await axios.get(`https://restcountries.com/v2/alpha/${alpha3Code}`);
        country.value = countryResponse.data;
        if (!allCountries.value.length) {
            const allCountriesResponse = await axios.get("https://restcountries.com/v2/all");
            allCountries.value = allCountriesResponse.data;
        }
    }
    catch (error) {
        console.error("Error fetching country data:", error);
    }
};
onMounted(() => fetchCountryDetails(route.params.alpha3Code));
watch(() => route.params.alpha3Code, (newCode) => {
    fetchCountryDetails(newCode);
});
const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    document.body.classList.toggle("dark-mode", theme.value === "dark");
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['detail'];
    __VLS_styleScopedClasses['dark-mode'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['dark-mode'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['dark-mode'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['dark-mode'];
    __VLS_styleScopedClasses['border-link'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("detail") }, });
    // @ts-ignore
    [Header,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({ ...{ 'onToggleTheme': {} }, theme: ((__VLS_ctx.theme)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onToggleTheme': {} }, theme: ((__VLS_ctx.theme)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onToggleTheme: (__VLS_ctx.toggleTheme)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [BackButton,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(BackButton, new BackButton({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    if (__VLS_ctx.country) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("country-details") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.country.flag)), alt: ((__VLS_ctx.country.name + ' flag')), ...{ class: ("flag") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_ctx.country.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("details") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.nativeName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.population.toLocaleString());
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.region);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.subregion);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.capital);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.topLevelDomain?.join(", "));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.currencies?.map((c) => c.name).join(", "));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.country.languages?.map((l) => l.name).join(", "));
        // @ts-ignore
        [BorderCountries,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(BorderCountries, new BorderCountries({ borders: ((__VLS_ctx.country.borders)), allCountries: ((__VLS_ctx.allCountries)), }));
        const __VLS_13 = __VLS_12({ borders: ((__VLS_ctx.country.borders)), allCountries: ((__VLS_ctx.allCountries)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    __VLS_styleScopedClasses['detail'];
    __VLS_styleScopedClasses['country-details'];
    __VLS_styleScopedClasses['flag'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['details'];
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
            Header: Header,
            BorderCountries: BorderCountries,
            BackButton: BackButton,
            country: country,
            allCountries: allCountries,
            theme: theme,
            toggleTheme: toggleTheme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
