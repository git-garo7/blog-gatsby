import React from "react";

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import * as S from './styled'
import Hit from './Hit'

const algolia = {
    appid: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(
    algolia.appid,
    algolia.searchOnlyApiKey);


const Search = () => (
    <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
    <SearchBox autoFocus translations={{placeholder: 'pesquisar...'}} />
    <Stats translations={{stats(nbHits, timeSpentMS){
        return `${nbHits} resultados encontrados em ${timeSpentMS}ms`
    }}} />
    <Hits hitComponent={Hit} />
  </InstantSearch>
    </S.SearchWrapper>
)

export default Search