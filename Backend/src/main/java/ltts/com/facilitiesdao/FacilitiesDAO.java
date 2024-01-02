package ltts.com.facilitiesdao;


import java.util.List;

import ltts.com.model.Facilities;

public interface FacilitiesDAO {
 public boolean addFacilities(Facilities facility);
 public Iterable<Facilities> show();
 public int edit(String contact,String address,String details,double ratings,String image,int fid);
 public boolean delete(int fid);
 public List<Facilities> findByCatLoc(String category,String City);
 public List<Facilities> findByCity(String city);
 public Facilities showByFid(int fid);
 public List<Facilities> findByCat(String category);
}
