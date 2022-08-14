package facebookclone.facebook.Services;

import facebookclone.facebook.Entity.Status;
import facebookclone.facebook.Repository.StatusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class StatusService {
    @Autowired
    private StatusRepo statusRepo;

    public List<Status> saveStatus(Status status ){

        Date date=new Date(System.currentTimeMillis());

        status.setStatusID(UUID.randomUUID().toString());
        status.setUploadTime(date);
        return getAllStatus(statusRepo.save(status).getUserID());
    }

    public List<Status>getAllStatus(String userId)
    {
       List<Status>status=statusRepo.getAll(userId);
       status.sort((Status s1,Status s2 )->s1.getUploadTime().compareTo(s2.getUploadTime()));
       return status;
    }

}
