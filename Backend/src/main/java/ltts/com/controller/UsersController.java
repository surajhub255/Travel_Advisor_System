package ltts.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ltts.com.Service.UsersService;
import ltts.com.facilitiesservice.FacilitiesService;
import ltts.com.model.Facilities;
import ltts.com.model.Users;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/users")
public class UsersController {

	@Autowired
	private UsersService uservice;
	@Autowired
	private FacilitiesService fservice;
	
   // user pages====================================
	@PostMapping("/signup")
	public String registerUser(@RequestBody Users user)
	{		if(user.getType()==null)
			    user.setType("user");
			uservice.addUser(user);
			return "registered successfully";
		
	}

	@PostMapping("/login")
	public String loginUser(@RequestBody Users user)
	{
		if(user.getEmailid().equals("admin123@gmail.com") && user.getPass().equals("admin123"))
		{
			return "admin";
		}
		else {
			
			if(uservice.loginMatch(user.getEmailid(), user.getPass()))
			{
				return "password matched";
			}else {
				return "not matched";
			}
		}
		         
		 
		
	}
	@PutMapping("/editby/{emailid}")
	public String editUser(@PathVariable("emailid") String emailid, @RequestBody Users user) {
		String uname=user.getUname();
		String pass=user.getPass();
		long mobile=user.getMobile();
		String address=user.getAddress();
		if(uservice.editUser(uname, pass, mobile, address, emailid)) {
			return "updated successfully";
		}
		return "not updated";
		
	}
	
	@GetMapping("/showby/{emailid}")
	public Users show(@PathVariable("emailid") String emailid) {
		
		return uservice.getDetails(emailid);
	}
	//admin pages====================================
	
	@PostMapping("/add/facility")
	public String registerFacility(@RequestBody Facilities facility)
	{		
			fservice.addFacilities(facility);
			return "registered successfully";
		
	}
	
    @GetMapping("/show")
    public Iterable<Facilities> show(){
    	return fservice.show();
    }
	
    @PutMapping("/edit/{fid}")
    public String editFacility(@PathVariable("fid") int fid,@RequestBody Facilities facility) {
    	if(fservice.edit(facility.getContact(),facility.getAddress(), facility.getDetails(), facility.getRatings(), facility.getImage(), fid)==1) {
    		return "updated successfully";
    	}
    	return " not updated successfully";
    }
    
    @DeleteMapping("/delete/{fid}")
    public String deleteById(@PathVariable("fid") int fid) {
    	if(fservice.delete(fid)) {
    		return "deleted successfully";
    	}
    	return "not deleted";
    }
    
    
    
    @GetMapping("/showby/{category}/{city}")
    public List<Facilities> findByCatLoc(@PathVariable("category") String category,@PathVariable("city") String city){
    	return fservice.findByCatLoc(category, city);
    }
    
    @GetMapping("/showbycity/{city}")
    public List<Facilities> findByCity(@PathVariable("city") String city){
    	return fservice.findByCity(city);
    }
    @GetMapping("/showbyfid/{fid}")
    public Facilities findByCatLoc(@PathVariable("fid") int fid){
    	return fservice.showByFid(fid);
    }
    
    @GetMapping("/showcat/{category}")
    public List<Facilities> findByCat(@PathVariable("category") String category){
    	return fservice.findByCat(category);
    }
}
