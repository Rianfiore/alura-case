import NextLink from 'next/Link';

import { LinkProps } from './types';

export function Link({children, href, ...props} : LinkProps) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}