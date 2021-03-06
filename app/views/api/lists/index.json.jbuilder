json.movies do 
  @movies.each do |movie|
    json.set! movie.id do
      json.extract! movie, :id, :title, :description, :year, :genre
      json.pic url_for(movie.photo)
    end
  end
end