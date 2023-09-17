import { IStatisticsResponse } from '@/types/statistics.interface'

import { instance } from '@/api/api.interceptor'

const STATISTICS = 'statistics'

export const StatisticsService = {
	async getMain() {
		return instance<IStatisticsResponse>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
