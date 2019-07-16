import React from 'react'
import articles from '../assets/articles'

const Article = () => (

  <div className="accordion mb-3 border-bottom">
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0 text-center">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target="#collapseArticles"
          >
            View Articles
          </button>
        </h2>
      </div>

      <div id="collapseArticles" className="collapse">
        <div className="list-group">
          <div className="list-group">
            {
              articles.map((certification, i) => (
                <a
                  className="list-group-item list-group-item-action border-right-0 border-left-0"
                  key={ i }
                  href={ certification.link }
                  target="_blank"
                  rel="noreferrer"
                >
                  { certification.name }
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Article
