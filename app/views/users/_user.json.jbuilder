json.extract! user, :id, :username, :password_digest, :session_token, :email, :created_at, :updated_at
json.url user_url(user, format: :json)
