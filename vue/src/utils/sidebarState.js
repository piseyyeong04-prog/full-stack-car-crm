import { ref } from 'vue';

const STORAGE_KEY = 'car_crm_sidebar_collapsed';

// Read initial state from localStorage (default to false = expanded)
const getInitialState = () => {
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
            return stored === 'true';
        }
    }
    return false;
};

export const isSidebarCollapsed = ref(getInitialState());

export function applySidebarState(collapsed) {
    isSidebarCollapsed.value = collapsed;

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, String(collapsed));
    }

    if (typeof document !== 'undefined') {
        const root = document.documentElement;
        const body = document.body;

        if (collapsed) {
            body.classList.add('sidebar-collapsed', 'mini-sidebar');
            root.style.setProperty('--sidenav-width', '72px');
        } else {
            body.classList.remove('sidebar-collapsed', 'mini-sidebar');
            root.style.setProperty('--sidenav-width', '240px');
        }
    }
}

export function toggleSidebarCollapsed() {
    applySidebarState(!isSidebarCollapsed.value);
}

// Initial sync
if (typeof document !== 'undefined') {
    applySidebarState(isSidebarCollapsed.value);
}
