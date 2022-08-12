package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface CommentRepo extends MongoRepository<Comment, UUID> {
}
