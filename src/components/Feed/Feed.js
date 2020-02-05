// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es')
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};
function truncate(str) {
  let slug = str.slice(7)
  let values = slug.split(',')
  // console.log(values);
  if(values[0] == 1){
    return 'pdfs/'+values[1]
  } else {
    return str
  }
}

const Feed = ({ edges }: Props) => (


  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <a className={styles['feed__item-title-link']} href={truncate(edge.node.fields.slug)}>{edge.node.frontmatter.title}</a>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
        <a href={truncate(edge.node.fields.slug)} className={styles['feed__item-readmore']}>Leer Mas</a>
      </div>
    ))}
  </div>
);

export default Feed;
