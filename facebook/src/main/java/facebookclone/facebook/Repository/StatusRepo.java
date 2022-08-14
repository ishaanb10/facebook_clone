package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Status;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.UUID;

public interface StatusRepo extends MongoRepository<Status, UUID> {
    @Query("{userId:?0}")
    List<Status>getAll(String userId);
}
