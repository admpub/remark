import { Theme } from './types';
import { THEMES, MAX_SHOWN_ROOT_COMMENTS } from './constants';
import parseQuery from '@app/utils/parseQuery';

export interface QuerySettingsType {
  site_id?: string;
  page_title?: string;
  url?: string;
  max_shown_comments?: number;
  theme: Theme;
  /* used in delete users data page */
  token?: string;
}

export const querySettings: Partial<QuerySettingsType> = parseQuery();

if (querySettings.max_shown_comments) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  querySettings.max_shown_comments = parseInt((querySettings.max_shown_comments as any) as string, 10);
} else {
  querySettings.max_shown_comments = MAX_SHOWN_ROOT_COMMENTS;
}

if (!querySettings.theme || THEMES.indexOf(querySettings.theme) === -1) {
  querySettings.theme = THEMES[0];
}

export const siteId = querySettings.site_id;
export const pageTitle = querySettings.page_title;
export const url = querySettings.url;
export const maxShownComments = querySettings.max_shown_comments;
export const token = querySettings.token;
export const theme = querySettings.theme;
