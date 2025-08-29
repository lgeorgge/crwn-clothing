export const categoriesSelector = (state) => {
	const categories = state.categories.categories;
	if (categories instanceof Map) return categories;
	if (categories && typeof categories === "object")
		return new Map(Object.entries(categories));
	return new Map();
};
