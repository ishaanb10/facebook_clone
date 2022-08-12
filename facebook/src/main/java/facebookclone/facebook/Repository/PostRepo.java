package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface PostRepo extends MongoRepository<Post, UUID> {

}
