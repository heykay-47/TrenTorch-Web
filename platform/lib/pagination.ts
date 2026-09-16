export function normalizePage(rawPage: string | null, totalPages: number): number {
	const lastPage = Math.max(1, totalPages);

	if (rawPage === null || !/^\d+$/.test(rawPage)) return 1;

	const page = Number(rawPage);
	return Math.min(Math.max(1, page), lastPage);
}
