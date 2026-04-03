import type { NewsApiResponse } from '~/types/news'


export function useFetchArticles(pageToken: Ref<string | null | undefined>) {
  const { public: { newsApiKey } } = useRuntimeConfig()

  return useFetch<NewsApiResponse>(
    () => {
      const token = pageToken.value
      return token
        ? `https://newsdata.io/api/1/latest?apikey=${newsApiKey}&size=10&page=${token}`
        : `https://newsdata.io/api/1/latest?apikey=${newsApiKey}&size=10`
    },
    { watch: [pageToken] },
  )
}

export function useFetchArticleById(id: string) {
  const { public: { newsApiKey } } = useRuntimeConfig()

  return useFetch<NewsApiResponse>(
    `https://newsdata.io/api/1/latest?apikey=${newsApiKey}&id=${id}`,
  )
}
