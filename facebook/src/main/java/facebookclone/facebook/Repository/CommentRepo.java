package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.UUID;

public interface CommentRepo extends MongoRepository<Comment, String> {
    @Query("{postId:?0}")
    List<Comment>findByPostId(String postId);
}
