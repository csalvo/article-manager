class Api::V1::ArticlesController < Api::V1::BaseController

  def show
    @articles = Article.find(params[:id])
    respond_with @articles
  end

  def index
    respond_with Article.all
  end

  def create
    article = Article.new(article_params)
    if article.save
      render json: article, status: 201, location: [:api, article]
    else
      render json: { errors: article.errors }, status: 422
    end
  end

  def update
    article = Article.find(params[:id])
    if article.update(article_params)
      render json: article, status: 200, location: [:api, article]
    else
      render json: { errors: article.errors }, status: 422
    end
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy
    head 204
  end

  private

   def article_params
    params.require(:article).permit(:title,
                                    :description,
                                    :author,
                                    :tags)
    end
end