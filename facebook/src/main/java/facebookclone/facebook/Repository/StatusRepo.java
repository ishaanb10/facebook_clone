package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Status;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StatusRepo extends MongoRepository<Status,String> {
}
