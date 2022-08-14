package facebookclone.facebook.Controller;

import facebookclone.facebook.Entity.Status;
import facebookclone.facebook.Services.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/status")
public class StatusController {

    @Autowired
    StatusService statusService;

    @PostMapping("/save/{userId}")
     public List<Status>saveStatus(@RequestBody Status status,@PathVariable String userId){
        status.setUserID(userId);
        return statusService.saveStatus(status);
    }

    @GetMapping("/getAll/{userId}")
    public List<Status> getAllStatus(@PathVariable String userId){
        return statusService.getAllStatus(userId);
    }
}
