import {useQuery} from '@tanstack/react-query';
import {apiClient} from '@common/http/query-client';
import {BackendResponse} from '@common/http/backend-response/backend-response';
import {Title} from '@app/titles/models/title';
import {Person} from '@app/titles/models/person';
import {getBootstrapData} from '@common/core/bootstrap-data/use-backend-bootstrap-data';

export interface SearchResponse extends BackendResponse {
  query: string;
  results: (Title | Person)[];
}

export function useSearchResults(
  loader: 'searchPage' | 'searchAutocomplete',
  query?: string
) {
  return useQuery<SearchResponse>(
    ['search', query, 'loader'],
    () => search(loader, query),
    {
      enabled: !!query,
      keepPreviousData: !!query,
      initialData: () => {
        const data = getBootstrapData().loaders?.[loader];
        if (query && data?.query == query) {
          return data;
        }
      },
    }
  );
}

function search(loader: string, query?: string) {
  return apiClient
    .get<SearchResponse>(`search/${query}`, {params: {loader}})
    .then(response => response.data);
}
