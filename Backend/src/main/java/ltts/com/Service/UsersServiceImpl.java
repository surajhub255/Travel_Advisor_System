package ltts.com.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltts.com.model.Facilities;
import ltts.com.model.Users;
import ltts.com.usersdao.UsersDAO;

@Service
public class UsersServiceImpl implements UsersService{

	@Autowired
	private UsersDAO dao;
	@Override
	public boolean addUser(Users user) {
		
		return dao.addUser(user);
	}
	@Override
	public boolean existEmail(String email) {
		// TODO Auto-generated method stub
		return dao.existEmail(email);
	}
	@Override
	public boolean loginMatch(String emailid, String pass) {
		// TODO Auto-generated method stub
		return dao.loginMatch(emailid, pass);
	}
	@Override
	public boolean editUser(String uname, String pass, long mobile, String address, String emailid) {
		// TODO Auto-generated method stub
		return dao.editUser(uname, pass, mobile, address, emailid);
	}
	@Override
	public Users getDetails(String emailid) {
	
		return dao.getDetails(emailid);
	}
	
}
