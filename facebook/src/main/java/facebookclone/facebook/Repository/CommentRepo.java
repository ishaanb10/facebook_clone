package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepo extends MongoRepository<Comment,String> {
}
