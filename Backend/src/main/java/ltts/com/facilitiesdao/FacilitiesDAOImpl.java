package ltts.com.facilitiesdao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import ltts.com.facilitiesjpa.FacilitiesJPARepository;
import ltts.com.model.Facilities;

@Repository
public class FacilitiesDAOImpl implements FacilitiesDAO{
	@Autowired
	private FacilitiesJPARepository reposit;

	@Override
	public boolean addFacilities(Facilities facility) {
		// TODO Auto-generated method stub
		if(reposit.save(facility) != null)
			return true;
		return false;
	}

	@Override
	public Iterable<Facilities> show() {
		// TODO Auto-generated method stub
		return reposit.findAll();
	}

	@Override
	@Transactional
	public int edit(String contact, String address, String details, double ratings, String image, int fid) {
		// TODO Auto-generated method stub
		return reposit.edit(contact, address, details, ratings, image, fid);
	}

	@Override
	public boolean delete(int fid) {
		// TODO Auto-generated method stub
		Optional<Facilities> id = reposit.findById(fid);
		if(id!=null) {
			reposit.deleteById(fid);
			return true;

		}
		return false;
	}
	@Override
	public List<Facilities> findByCatLoc(String category,String City) {
		return reposit.findByCatLoc(category, City);
	}
	
	@Override
	public List<Facilities> findByCity(String city) {
		// TODO Auto-generated method stub
		return reposit.findByCity(city);
	}
 
	@Override
	public Facilities showByFid(int fid) {
		// TODO Auto-generated method stub
		return reposit.showByFid(fid);
	}
	
	@Override
	public List<Facilities> findByCat(String category) {
		return reposit.findByCat(category);
	}
	
}
