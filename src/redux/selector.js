export const selectAdverts = (state) => state.catalog.adverts;
export const selectAllAdverts = (state) => state.catalog.allAdverts;
export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectError = (state) => state.catalog.error;
export const selectPage = (state) => state.catalog.page;
export const selectFilters = (state) => state.filters.filters;
export const filtersFavorite = (state) => state.filters.filtersFavorite;

export const favoritesCars = (state) => state.favorites.items;
export const totalFavoritesCars = (state) => state.favorites.items.length;
