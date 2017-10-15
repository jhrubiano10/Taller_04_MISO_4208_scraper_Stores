/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsoup.crawler;

import java.io.IOException;
import java.util.HashSet;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;


/**
 *
 * @author jorgerubiano
 */
public class JsoupCrawler {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        //Document doc = Jsoup.connect("https://play.google.com/store/apps/category/FINANCE/collection/topselling_paid").timeout(0).get();
        
        //Buscando resultados en Español...
        Document doc = Jsoup.connect("https://play.google.com/store/apps/category/FINANCE/collection/topselling_paid?hl=es").timeout(0).get();
        Document detailDoc = null;
        HashSet<String> hrefs = new HashSet<String>();
        String href = null;
        Elements anchors = doc.getElementsByClass("card-click-target");
        String description = null;
        for(Element element : anchors) {
            href = "https://play.google.com/" + element.attr("href").toString();
            hrefs.add(href);
        }
        
        for(String url : hrefs) {
            detailDoc = Jsoup.connect(url).timeout(0).get();
            description = detailDoc.select("[itemprop='description']").text();
            System.out.println(description);
        }
        
        //System.out.println(hrefs);
        //String title = doc.title();
        //System.out.println(doc);
        //show-more-content
        /*
            Document detailDoc = Jsoup.connect("https://play.google.com/store/apps/details?id=com.davivienda.daviplataapp").timeout(0).get();
            String review = detailDoc.getElementsByClass("reviews-num").text();
            System.out.println(review);
        */
        
    }
    
}
