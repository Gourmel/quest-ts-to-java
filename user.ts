import { Address } from './address';
import { Photo } from './photo';

export class User {
    birthdate: Date;
    size: number;
    photos: Photo[];
    address: Address; 
}








/*import java.util.Date;

public class User {
    private Date birthdate;
    private int size;
    private Photo[] photos;
    private Address address;

    User(Date birthdate, int size, List<Photo> photos, Adress adress){
        this.birthdate = birthdate;
        this.size = size;
        this.photos = photos;
        this.adress = adress;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Photo[] getPhotos() {
        return photos;
    }

    public void setPhotos(Photo[] photos) {
        this.photos = photos;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}*/
