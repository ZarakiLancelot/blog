class Shared::PostItem < Bridgetown::Component
  def initialize(post:)
    @post = post
  end
end