package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Status;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface StatusRepo extends MongoRepository<Status, UUID> {
}
