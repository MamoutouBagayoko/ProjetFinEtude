package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Personnel;

import java.io.IOException;
import java.util.List;

@Service
public interface PersonnelService {
    public Personnel addperson(Personnel person, MultipartFile image) throws IOException;
    public Personnel updateperson(Personnel person,long id);
    public void deleteperson(long id);
    public List<Personnel> listeperson(Etat etat);
    public Personnel findByIdAndEtat(Etat etat,long id);
    public List<Personnel> ListePersonnelParCategorie(long id);
    //pour affiche le photo
    public byte[] getPhoto(long id) throws IOException;
    //
    public Personnel findByIdPerso(long id);
    public List<Personnel> personnelInatif();


}
