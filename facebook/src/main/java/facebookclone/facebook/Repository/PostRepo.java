package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.UUID;

public interface PostRepo extends MongoRepository<Post, String> {
   @Query(value = "{userID:?0}")
    List<Post>findByUserId(String userID);
}
