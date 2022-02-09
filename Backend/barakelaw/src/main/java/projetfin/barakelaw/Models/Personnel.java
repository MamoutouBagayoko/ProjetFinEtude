package projetfin.barakelaw.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Enummer.Genre;
import projetfin.barakelaw.Enummer.Matrimoliale;

import javax.persistence.*;
import java.io.Serializable;

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
    private String ages;
    private String adresse;
    private String numphone;
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


}
