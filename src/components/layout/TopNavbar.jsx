import { useAuth } from '../../context/AuthContext';

export default function TopNavbar() {
  const { user } = useAuth();

  return (
    <div className="h-14 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="text-sm text-zinc-400">
        Welcome back, <span className="text-white font-medium">{user?.name || 'User'}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold text-white">
          {user?.name?.[0]?.toUpperCase() || 'U'}
        </div>
      </div>
    </div>
  );
}