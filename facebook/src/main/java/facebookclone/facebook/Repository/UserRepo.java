package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.UUID;


public interface UserRepo extends MongoRepository<User, String>{
}
