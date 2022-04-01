package projetfin.barakelaw.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Enummer.Genre;
import projetfin.barakelaw.Enummer.Matrimoliale;
import projetfin.barakelaw.Enummer.TypeContrat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Personnel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String prenom;
    private Long age;
    private String adresse;
    private Long numphone;
    private String langparler;
    private String niveauetude;
    private String photo;
    @Enumerated(EnumType.STRING)
    private Etat etat=Etat.actif;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    private String competence;
    @Enumerated(EnumType.STRING)
    private Matrimoliale matrimoliale;
    @ManyToOne
    private Categorie categorie;
    @Enumerated(EnumType.STRING)
    private TypeContrat typeContrat;
    @OneToMany(mappedBy = "personnel", fetch = FetchType.EAGER)
    private List<Log> log= new ArrayList<>();


}
