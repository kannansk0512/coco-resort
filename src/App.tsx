import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import AccommodationsPage from "@/pages/AccommodationsPage";
import RoomDetailPage from "@/pages/RoomDetailPage";
import GalleryPage from "@/pages/GalleryPage";
import AmenitiesPage from "@/pages/AmenitiesPage";
import ActivitiesPage from "@/pages/ActivitiesPage";
import OffersPage from "@/pages/OffersPage";
import AttractionsPage from "@/pages/AttractionsPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/accommodations" element={<AccommodationsPage />} />
            <Route path="/room/:id" element={<RoomDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
