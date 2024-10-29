import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import Header from "../components/Header.vue";
import SearchBar from "../components/SearchBar.vue";
import RegionFilter from "../components/RegionFilter.vue";
import SortDropdown from "../components/SortDropdown.vue";
import CountryCard from "../components/CountryCard.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const route = useRoute();
const filters = ref({
    searchQuery: "",
    selectedRegion: "",
    sortOption: "",
});
const countries = ref([]);
const theme = ref("light");
onMounted(async () => {
    // Parse initial query parameters from the URL
    const { searchQuery, selectedRegion, sortOption } = route.query;
    if (searchQuery)
        filters.value.searchQuery = searchQuery;
    if (selectedRegion)
        filters.value.selectedRegion = selectedRegion;
    if (sortOption)
        filters.value.sortOption = sortOption;
    // Fetch country data
    try {
        const response = await axios.get("https://restcountries.com/v2/all");
        countries.value = response.data;
    }
    catch (error) {
        console.error("Error fetching countries:", error);
    }
});
// Sync URL query with filter changes
watch(filters, (newFilters) => {
    router.replace({
        query: {
            ...route.query,
            searchQuery: newFilters.searchQuery || undefined,
            selectedRegion: newFilters.selectedRegion || undefined,
            sortOption: newFilters.sortOption || undefined,
        },
    });
}, { deep: true });
const createFuzzyRegex = (input) => {
    const pattern = input.split("").join(".*");
    return new RegExp(pattern, "i");
};
const filteredCountries = computed(() => {
    const regex = createFuzzyRegex(filters.value.searchQuery);
    let filtered = countries.value.filter((country) => {
        const matchesRegion = filters.value.selectedRegion
            ? country.region === filters.value.selectedRegion
            : true;
        const matchesSearch = regex.test(country.name);
        return matchesRegion && matchesSearch;
    });
    if (filters.value.sortOption === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (filters.value.sortOption === "name-desc") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (filters.value.sortOption === "population-asc") {
        filtered.sort((a, b) => a.population - b.population);
    }
    else if (filters.value.sortOption === "population-desc") {
        filtered.sort((a, b) => b.population - a.population);
    }
    return filtered;
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
    __VLS_styleScopedClasses['controls'];
    __VLS_styleScopedClasses['controls'];
    __VLS_styleScopedClasses['country-card'];
    __VLS_styleScopedClasses['country-card'];
    __VLS_styleScopedClasses['dark-mode'];
    __VLS_styleScopedClasses['country-card'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("controls") }, });
    // @ts-ignore
    [SearchBar,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(SearchBar, new SearchBar({ searchQuery: ((__VLS_ctx.filters.searchQuery)), }));
    const __VLS_8 = __VLS_7({ searchQuery: ((__VLS_ctx.filters.searchQuery)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [RegionFilter,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(RegionFilter, new RegionFilter({ selectedRegion: ((__VLS_ctx.filters.selectedRegion)), }));
    const __VLS_13 = __VLS_12({ selectedRegion: ((__VLS_ctx.filters.selectedRegion)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    // @ts-ignore
    [SortDropdown,];
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(SortDropdown, new SortDropdown({ sortOption: ((__VLS_ctx.filters.sortOption)), }));
    const __VLS_18 = __VLS_17({ sortOption: ((__VLS_ctx.filters.sortOption)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("country-grid") }, });
    for (const [country] of __VLS_getVForSourceType((__VLS_ctx.filteredCountries))) {
        // @ts-ignore
        [CountryCard,];
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(CountryCard, new CountryCard({ key: ((country.alpha3Code)), country: ((country)), }));
        const __VLS_23 = __VLS_22({ key: ((country.alpha3Code)), country: ((country)), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    }
    __VLS_styleScopedClasses['home'];
    __VLS_styleScopedClasses['controls'];
    __VLS_styleScopedClasses['country-grid'];
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
            SearchBar: SearchBar,
            RegionFilter: RegionFilter,
            SortDropdown: SortDropdown,
            CountryCard: CountryCard,
            filters: filters,
            theme: theme,
            filteredCountries: filteredCountries,
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
