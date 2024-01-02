package ltts.com.facilitiesservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ltts.com.facilitiesdao.FacilitiesDAO;
import ltts.com.model.Facilities;

@Service
public class FacilitiesServiceImpl implements FacilitiesService {
     
	@Autowired
	private FacilitiesDAO dao;
	@Override
	public boolean addFacilities(Facilities facility) {
		// TODO Auto-generated method stub
		return dao.addFacilities(facility);
	}
	@Override
	public Iterable<Facilities> show() {
		// TODO Auto-generated method stub
		return dao.show();
	}
	@Override
	public int edit(String contact, String address, String details, double ratings, String image, int fid) {
		// TODO Auto-generated method stub
		return dao.edit(contact, address, details, ratings, image, fid);
	}
	@Override
	public boolean delete(int fid) {
		// TODO Auto-generated method stub
		return dao.delete(fid);
	}
	@Override
	public List<Facilities> findByCatLoc(String category, String City) {
		// TODO Auto-generated method stub
		return dao.findByCatLoc(category, City);
	}
	
	@Override
	public List<Facilities> findByCity(String city) {
		// TODO Auto-generated method stub
		return dao.findByCity(city);
	}
	@Override
	public Facilities showByFid(int fid) {
		// TODO Auto-generated method stub
		return dao.showByFid(fid);
	}	
	
	@Override
	public List<Facilities> findByCat(String category) {
		return dao.findByCat(category);
	}
	
	
}
